import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree, Input } from 'antd';
const { TreeNode } = Tree;
const { Search } = Input;
// process.env.__CLIENT__ && require('./treeSync.less');

const propTypes = {
	treeData: PropTypes.array,
	config: PropTypes.object,
	event: PropTypes.object,
	onExpand: PropTypes.func,
	onCheck: PropTypes.func,
	onSelect: PropTypes.func,
	onSearch: PropTypes.func,
	expandedKeys: PropTypes.array,
	showSearch: PropTypes.bool
};

class TreeSync extends Component {
	constructor(props) {
		super(props);
		this.state = {
			treeData: [],
			oldTreeData: [],
			searchData: [],
			copyTreeData: [],
			// loading: false
			// checkedKeys: props.checkedKeys || [],
			checkedKeys: [],
			showSearch: true,
			// showRoot: props.showRoot,
			expandedKeys: ['0'] || props.expandedKeys,
			autoExpandParent: true
		};

		this.onSearch = this.onSearch.bind(this);
	}

	componentDidMount = () => {
		this.getTreeData1()
	};

	getTreeData1 = () => {
		let treeData = [];
		let oldTreeData = []
		if (this.props.model) {
			this.props.model.addListener(this);
			treeData = this.props.model.getValue();
			oldTreeData = JSON.parse(JSON.stringify(treeData));
		} else {
			treeData = this.props.treeData;
			oldTreeData = JSON.parse(JSON.stringify(treeData));
		}

		let copyTreeData = JSON.parse(JSON.stringify(treeData));
		let res = this.getAllKeys(copyTreeData);
		let treeDataLen = res.keys.length;
		let checkedKeys = res.checkedKeys;
		this.setState({
			treeData: treeData,
			oldTreeData: oldTreeData,
			copyTreeData: copyTreeData,
			treeDataLen: treeDataLen,
			showSearch: this.props.showSearch,
			checkedKeys: { checked: checkedKeys, halfChecked: checkedKeys.length > 0 ? [ '0' ] : [] }
		});
	}
	componentDidUpdate(prevProps) {
		if (this.props.model) this.props.model.addListener(this);
		// let newData = this.props.model.getValue();
		let prev = JSON.stringify(this.state.oldTreeData);
		let nowD = JSON.stringify(this.props.treeData)
		if (prev !== nowD) {
			this.getTreeData1()
		}
	}
	componentWillUnmount() {
		if (this.props.model) this.props.model.removeListener(this);
	}
	// 处理默认选中
	getDefaultCheckedKeys = (treeData) => {
		// const treeData = this.state.treeData
		let keys = [];
		treeData &&
			treeData.map((item) => {
				if (item.checked) {
					keys.push(item.key);
				}
				// item.checked = true
				if (item.children && item.children.length > 0) {
					let childKeys = this.getAllChildrenKeys(item.children);
					keys = keys.concat(childKeys);
				}
			});
		return keys;
	};

	renderTreeNode = (treeData) => {
		return (
			treeData &&
			treeData.map((item) => {
				if (item.children) {
					return (
						<TreeNode title={item.title} key={item.id} dataRef={item}>
							{this.renderTreeNode(item.children)}
						</TreeNode>
					);
				}
				return <TreeNode title={item.title} key={item.id} dataRef={item} />;
			})
		);
	};
	onSelect = (selectedKeys, info) => {
		this.props.onSelect && this.props.onSelect(selectedKeys, info);
	};

	onExpand = (expandedKeys, { expanded: bool, node }) => {
		this.setState({
			expandedKeys,
			autoExpandParent: false
		});
	};
	onCheck = (checkedKeys, info) => {
		// console.log('onCheck', checkedKeys, info);
		this.getCheckedKeys(checkedKeys, info);
	};
	// 子集勾选了以后父级要勾选
	// 父级勾选后子集不勾
	// 但是父级不全选中的时候子集要取消选中
	getCheckedKeys = (checkedKeys, info) => {
		let currentKeyInfo = info.node.props;
		// 1. 点击全选时
		if (currentKeyInfo.dataRef && currentKeyInfo.dataRef.id === '0') {
			if (info.checked) {
				let allChildrenKeys = this.getAllChildrenKeys(currentKeyInfo.children);
				let newCheckedKeys = checkedKeys.checked.concat(allChildrenKeys);
				this.setState(
					{
						checkedKeys: { checked: Array.from(new Set(newCheckedKeys)), halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.model && this.props.model.setValue(res, true);
						this.props.onCheck && this.props.onCheck(res)
					}
				);
			} else {
				this.setState(
					{
						checkedKeys: { checked: [], halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.model && this.props.model.setValue(res, true);
						this.props.onCheck && this.props.onCheck(res)
					}
				);
			}

			return;
		}
		// 2. 非全选时， 选中子组件， 父组件要全选， 顶部全选变为半选
		if (info.checked) {
			// 有父组件时 父组件全选
			let parentKeys = this.getParentKeys(checkedKeys);
			let newChecked = checkedKeys.checked.concat(parentKeys);
			let checked = Array.from(new Set(newChecked));
			if (checked.length === this.state.treeDataLen - 1) {
				checked.push('0');
				this.setState(
					{
						checkedKeys: { checked: checked, halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.model && this.props.model.setValue(res, true);
						this.props.onCheck && this.props.onCheck(res)
					}
				);
			} else {
				this.setState(
					{
						checkedKeys: { checked: checked, halfChecked: [ '0' ] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.model && this.props.model.setValue(res, true);
						this.props.onCheck && this.props.onCheck(res)
					}
				);
			}
			return;
		} else {
			if (currentKeyInfo.children && currentKeyInfo.children.length > 0) {
				let childreKeys = this.getAllChildrenKeys(currentKeyInfo.children); // 父级控制下面的所有子集

				for (let index = checkedKeys.checked.length - 1; index >= 0; index--) {
					const element = checkedKeys.checked[index];
					if (childreKeys.includes(element)) {
						checkedKeys.checked.splice(index, 1);
					}
				}
			}
			if (checkedKeys.checked.includes('0')) {
				let i = checkedKeys.checked.findIndex((item) => item === '0');
				checkedKeys.checked.splice(i, 1);
			}

			if (checkedKeys.checked.length > 0) {
				checkedKeys.halfChecked = [ '0' ];
			} else {
				checkedKeys.halfChecked = [];
			}
			this.setState(
				{
					checkedKeys: checkedKeys
				},
				() => {
					let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
					this.props.model && this.props.model.setValue(res, true);
					this.props.onCheck && this.props.onCheck(res)
				}
			);
		}
	};

	// 拿到所有子集的key
	/**
   * 
   * @param node  子集节点
   */
	getAllChildrenKeys = (node) => {
		let keys = [];
		node &&
			node.map((item) => {
				keys.push(item.key);
				// item.checked = true
				if (item.props.children && item.props.children.length > 0) {
					let childKeys = this.getAllChildrenKeys(item.props.children);
					keys = keys.concat(childKeys);
				}
			});
		return keys;
	};

	// 获取原始数据中的全部key
	getAllKeys = (treeData) => {
		let keys = [];
		let checkedKeys = [];
		treeData &&
			treeData.map((item) => {
				if (item.checked) {
					checkedKeys.push(item.id);
				}
				keys.push(item.id);
				if (item.children && item.children.length > 0) {
					let childKeys = this.getAllKeys(item.children);
					keys = keys.concat(childKeys.keys);
					checkedKeys = checkedKeys.concat(childKeys.checkedKeys);
				}
			});
		return { checkedKeys: checkedKeys, keys: keys };
	};

	getParentKeys = (checkedKeys) => {
		let parentKeys = [];
		checkedKeys.checked &&
			checkedKeys.checked.map((item, index) => {
				let res = this.findParentsBykey(item, this.state.copyTreeData);
				parentKeys = parentKeys.concat(res);
			});
		return Array.from(new Set(parentKeys));
	};

	// 拿到当前子集的上面所有父级
	findParentsBykey = (id, nodes, path) => {
		if (path === undefined) {
			path = [];
		}
		for (let i = 0; i < nodes.length; i++) {
			let tmpPath = path.concat();
			// 节点'全部'不被认为是父级， 其有自己的逻辑
			if (nodes[i].id !== '0') {
				tmpPath.push(nodes[i].id);
			}
			if (id == nodes[i].id) {
				return tmpPath;
			}
			if (nodes[i].children) {
				let findResult = this.findParentsBykey(id, nodes[i].children, tmpPath);
				if (findResult) {
					return findResult;
				}
			}
		}
	};

	// 由checkedId来给selected赋值
	onChangeTreeData = (checkedKeys, data) => {
		data &&
			data.map((item) => {
				if (checkedKeys.checked.includes(item.id)) {
					item.checked = true;
				} else {
					item.checked = false;
				}
				if (item.children && item.children.length > 0) {
					this.onChangeTreeData(checkedKeys, item.children);
				}
			});
		return data;
	};

	onSearch = (val) => {
		if (!val) {
			this.setState({ treeData: this.state.copyTreeData });
			return;
		}
		let copyTreeData = JSON.parse(JSON.stringify(this.state.copyTreeData));
		let res = this.findSearchedDataByVal(val, copyTreeData);
		this.setState({ searchData: res, treeData: res });
		this.props.onSearch && this.props.onSearch(val);
	};

	findSearchedDataByVal = (val, nodes, path) => {
		if (path === undefined) {
			path = [];
		}
		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].title.toUpperCase().indexOf(val.toUpperCase()) !== -1) {
				path.push(nodes[i]);
				continue;
			}
			if (nodes[i].children) {
				this.findSearchedDataByVal(val, nodes[i].children, path);
			}
		}
		return path
	}

	render() {
		const { treeData, checkedKeys, showSearch } = this.state;
		return (
			<div className="tree-sync">
				{showSearch ? (
					<Search placeholder="请输入" onSearch={(val) => this.onSearch(val)} className="tree-sync-search" />
				) : null}
				<Tree
					checkable
					expandedKeys={this.state.expandedKeys}
					defaultExpandedKeys={this.state.expandedKeys}
					autoExpandParent={this.state.autoExpandParent}
					checkedKeys={checkedKeys}
					onSelect={this.onSelect} //点击树节点触发
					onCheck={this.onCheck}
					checkStrictly
					onExpand={this.onExpand}
				>
					{this.renderTreeNode(treeData)}
				</Tree>
			</div>
		);
	}
}
TreeSync.propTypes = propTypes;
// TreeSync.defaultProps = defaultProps;
export default TreeSync;
