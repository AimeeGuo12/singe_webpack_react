import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';  // 引入antd样式表
import { Tree, Input, Badge, Icon, Modal, Form, Select, message } from 'antd';
const { TreeNode } = Tree;
const { Search } = Input;
const { confirm } = Modal;
import './treeSync.less';
import AddLable from './components/AddLable/index';
import EditableItem from './components/EditableItem/index';
// import data from './treeMockData.json';

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

// const defaultProps = {
//     config: {
//         defaultExpandAll: true,
//         checkable:true,
//         showLine:false,
//         expandedKeys: ['0-0'],
//     },
//     showSearch: true,
//     onExpand: () => {},
//     onCheck: () => {},
// };
class TreeSync extends Component {
	constructor(props) {
		super(props);
		this.data = [
			{
				value: 'Root',
				defaultValue: 'Root',
				key: '0-1',
				parentKey: '0',
				isEditable: false, //是否可修改
				isOpera: false, //是否可操作
				status: false, //关联状态
				children: [
					{
						value: 'child-1',
						defaultValue: 'child-1',
						key: '0-1-1',
						parentKey: '0-1',
						isEditable: false,
						isOpera: false,
						status: '关联标签1',
						children: [
							{
								value: 'child-0-1-1-1',
								defaultValue: 'child-1',
								key: '0-1-1-1',
								parentKey: '0-1-1',
								isEditable: false,
								isOpera: true,
								status: '关联标签2',
								children: [
									{
										value: '111',
										defaultValue: 'child-1111',
										key: '0-111',
										parentKey: '0-1-1-1',
										isEditable: false,
										isOpera: true,
										status: '关联标签3'
									},
									{
										value: '112',
										defaultValue: 'child-112',
										key: '0-112',
										parentKey: '0-1-1-1',
										isEditable: false,
										isOpera: false,
										status: false
									}
								]
							},
							{
								value: 'child-0-1-1-2',
								defaultValue: 'child-2-1',
								key: '0-1-1-2',
								parentKey: '0-1-1',
								isEditable: false,
								isOpera: false,
								status: false
							},
							{
								value: 'child-0-1-1-3',
								defaultValue: 'child-3-1',
								key: '0-1-1-3',
								parentKey: '0-1-1',
								isEditable: false,
								isOpera: true,
								status: false
							}
						]
					},
					{
						value: 'child-0-1-2',
						defaultValue: 'child-0-1-2',
						key: '0-1-2',
						parentKey: '0-1',
						isEditable: false,
						isOpera: true,
						status: false
					}
				]
			}
		]
		this.state = {
			treeData: this.data,
			searchData: [],
			copyTreeData: [],
			// loading: false
			// checkedKeys: props.checkedKeys || [],
			checkedKeys: [],
			showSearch: true,
			// showRoot: props.showRoot,
			expandedKeys: props.expandedKeys,
			autoExpandParent: true,
			node: null,
			isAddVisible: false,
			editVisiable: false,
			deleteVisiable: false,
			editItem: {
				value: '',
				defaultValue: '',
				key: '',
				parentKey: '',
				isAddVisible: false, //新增modla
				isEditable: false, //编辑mdoal
				isDelete: false, //删除modal
				isDetailVisible: false, //详情modal
				isOver: false,
			  },
			  modifyValue: ''
		};

		this.onSearch = this.onSearch.bind(this);
	}
	componentDidMount = () => {
		this.getTreeData1();
	};

	getTreeData1 = () => {
		let treeData = this.state.treeData;
		// let copyTreeData = JSON.parse(JSON.stringify(treeData));
		let res = this.getAllKeys(treeData);
		let treeDataLen = res.keys.length;
		let checkedKeys = res.checkedKeys;
		console.log(res, res.checkedKeys);
		this.setState({
			treeData: treeData,
			// copyTreeData: copyTreeData,
			treeDataLen: treeDataLen,
			showSearch: this.props.showSearch,
			checkedKeys: { checked: checkedKeys, halfChecked: checkedKeys.length > 0 ? [ 'v-root' ] : [] }
		});
	};
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.getTreeData1();
		}

		// if (this.props.model) this.props.model.addListener(this);
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

	onAdd = (e) => {
		console.log(e);
		// 防止expandedKeys重复
		// Tip: Must have, expandedKeys should not be reduplicative
		if (this.state.expandedKeys.indexOf(e.key) === -1) {
			//   this.expandedKeys.push(e.key);
		}
		this.setState({
			isAddVisible: true,
			node: e
			//   expandedKeys: this.expandedKeys,
		});
	};

	onEdit = (key, item) => {
		console.log('edit');
		this.setState({
		  editVisiable: true,
		  key,
		  editItem: item,
		  modifyValue: item.value,
		});
	  };
	onDelete = (key) => {
		confirm({
			title: '确认删除此标签吗?',
			icon: <Icon type="exclamation-circle" />,
			okText: '确定',
			cancelText: '取消',
			onOk: () => {
			  this.deleteNode(key, this.data);
			  this.setState({
				treeData: this.data,
			  });
			},
		  });
		// this.setState({
		// 	deleteVisiable: true,
		// 	key,
		//   });
	}

	// deleteCancel = key => {
	// 	this.setState({
	// 		deleteVisiable: false,
	// 	});
	//   };
	//   deleteOk = key => {
	// 	this.deleteNode(key, this.data);
	// 	this.setState({
	// 		deleteVisiable: false,
	// 	});
	//   };
	  deleteNode = (key, data) =>
		data.map((item, index) => {
		  if (item.key === key) {
			data.splice(index, 1);
			message.success('删除成功');
			return;
		  } else {
			if (item.children) {
			  this.deleteNode(key, item.children);
			}
		  }
		});
	   //修改标签名称
  onModifyChange = (e, editItem) => {
    this.setState({
      data: this.data,
      modifyValue: e.target.value,
    });
  };
	renderTreeNode = (treeData) => {
		return (
			treeData &&
			treeData.map((item) => {
				if (item.children) {
					return (
						<TreeNode title={item.title} key={item.key} dataRef={item}>
							{this.renderTreeNode(item.children)}
						</TreeNode>
					);
				}
				return <TreeNode title={item.title} key={item.key} dataRef={item} />;
			})
		);
	};

	renderTreeNodes = (data) =>
		data.map((item) => {
			if (!item.isOpera) {
				item.title = (
					<div className="isOpera">
						<span className="item-label  item-deep"> {item.value}</span>
					</div>
				);
			} else {
				item.title = (
					<div className="titleContainer">
						<span className="item-label">
							{' '}
							<Badge color={item.status ? '#87d068' : '#aaa'} />
							{item.value}
						</span>
						<span className="operationField">
							{item.status && (
								<Icon className="icon" type="read" onClick={() => this.onDetail(item.key)} />
							)}
							<Icon className="icon" type="plus" onClick={() => this.onAdd(item)} />
							<Icon className="icon" type="edit" onClick={() => this.onEdit(item.key, item)} />

							{item.parentKey === '0' ? null : (
								<Icon className="icon" type="minus" onClick={() => this.onDelete(item.key)} />
							)}
						</span>
					</div>
				);
			}

			if (item.children) {
				return (
					<TreeNode title={item.title} key={item.key} dataRef={item}>
						{this.renderTreeNodes(item.children)}
					</TreeNode>
				);
			}

			return <TreeNode {...item} />;
		});
	onSelect = (selectedKeys, info) => {
		// console.log('selected', selectedKeys, info);
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
		if (currentKeyInfo.dataRef && currentKeyInfo.dataRef.key === 'v-root') {
			if (info.checked) {
				let allChildrenKeys = this.getAllChildrenKeys(currentKeyInfo.children);
				let newCheckedKeys = checkedKeys.checked.concat(allChildrenKeys);
				this.setState(
					{
						checkedKeys: { checked: Array.from(new Set(newCheckedKeys)), halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.onCheck && this.props.onCheck(this.state.checkedKeys);
						this.props.model && this.props.model.setValue(res, true);
					}
				);
			} else {
				this.setState(
					{
						checkedKeys: { checked: [], halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.onCheck && this.props.onCheck(this.state.checkedKeys);
						this.props.model && this.props.model.setValue(res, true);
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
				checked.push('v-root');
				this.setState(
					{
						checkedKeys: { checked: checked, halfChecked: [] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.onCheck && this.props.onCheck(this.state.checkedKeys);
						this.props.model && this.props.model.setValue(res, true);
					}
				);
			} else {
				this.setState(
					{
						checkedKeys: { checked: checked, halfChecked: [ 'v-root' ] }
					},
					() => {
						let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
						this.props.onCheck && this.props.onCheck(this.state.checkedKeys);
						this.props.model && this.props.model.setValue(res, true);
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
			if (checkedKeys.checked.includes('v-root')) {
				let i = checkedKeys.checked.findIndex((item) => item === 'v-root');
				checkedKeys.checked.splice(i, 1);
			}

			if (checkedKeys.checked.length > 0) {
				checkedKeys.halfChecked = [ 'v-root' ];
			} else {
				checkedKeys.halfChecked = [];
			}
			this.setState(
				{
					checkedKeys: checkedKeys
				},
				() => {
					let res = this.onChangeTreeData(this.state.checkedKeys, this.state.treeData);
					this.props.onCheck && this.props.onCheck(checkedKeys);
					this.props.model && this.props.model.setValue(res, true);
				}
			);
		}

		// if (currentKeyInfo.children && currentKeyInfo.children.length > 0) {
		//   if (!info.checked) {  // 当前为某一父级时， 取消选中时，其子集都取消选中
		//     // let checkedKeys = this.state.checkedKeys
		//     // let childreKeys = currentKeyInfo.children.map(item => { // 父级只控制当前级
		//     //   return item.key
		//     // })
		//     let childreKeys = this.getAllChildrenKeys(currentKeyInfo.children)  // 父级控制下面的所有子集
		//     for (let index = checkedKeys.checked.length - 1; index >= 0; index--) {
		//       const element = checkedKeys.checked[index];
		//       if (childreKeys.includes(element)) {
		//         checkedKeys.checked.splice(index, 1)
		//       }
		//     }

		//     this.setState({
		//       checkedKeys
		//     })
		//   }
		// }
	};

	// 拿到所有子集的key
	/**
   * 
   * @param node  子集节点
   */
	getAllChildrenKeys = (node) => {
		console.log(node);
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
					checkedKeys.push(item.key);
				}
				keys.push(item.key);
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
	findParentsBykey = (key, nodes, path) => {
		if (path === undefined) {
			path = [];
		}
		for (let i = 0; i < nodes.length; i++) {
			let tmpPath = path.concat();
			// 节点'全部'不被认为是父级， 其有自己的逻辑
			if (nodes[i].key !== 'v-root') {
				tmpPath.push(nodes[i].key);
			}
			if (key == nodes[i].key) {
				return tmpPath;
			}
			if (nodes[i].children) {
				let findResult = this.findParentsBykey(key, nodes[i].children, tmpPath);
				if (findResult) {
					return findResult;
				}
			}
		}
	};

	// 由checkedId来给selected赋值
	onChangeTreeData = (checkedKeys, data) => {
		console.log(checkedKeys);
		data &&
			data.map((item) => {
				if (checkedKeys.checked.includes(item.key)) {
					item.checked = true;
				} else {
					item.checked = false;
				}
				if (item.children && item.children.length > 0) {
					this.onChangeTreeData(checkedKeys, item.children);
				}
			});
		console.log(data);
		return data;
	};

	onSearch = (val) => {
		console.log(val);
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
			let tmpPath = path;
			if (nodes[i].title.toUpperCase().indexOf(val.toUpperCase()) !== -1) {
				tmpPath.push(nodes[i]);
				if (i === nodes.length - 1) {
					return tmpPath;
				} else {
					continue;
				}
			}

			if (nodes[i].title.toUpperCase().indexOf(val.toUpperCase()) == -1 && nodes[i].children) {
				let findResult = this.findSearchedDataByVal(val, nodes[i].children, tmpPath);
				if (findResult) {
					return findResult;
				}
			} else if (i === nodes.length - 1) {
				return tmpPath;
			}
		}
	};

	//所有叶子节点中selected属性为true的节点，组装成为一个数组。
	// getCheckedNode = (treeData, newArr) => {
	// 	if (!newArr) {
	// 		newArr = []
	// 	}
	// 	for (let i = 0; i < treeData.length; i++) {
	// 		if (!treeData[i].children && treeData[i].selected) {
	// 		  newArr.push(treeData[i].id);
	// 	   } else {
	// 		  if (treeData[i].children) {
	// 		   this.getCheckedNode(treeData[i].children, newArr);
	// 		  }
	// 		}
	// 	 }
	// 	 return newArr;
	//   }
	
	addOk = (v) => {
		console.log(v)
		const {node, treeData} = this.state
		this.addNode(node, this.data, v)
		console.log(treeData)
		this.setState({
			isAddVisible: false
		})
	};
	addNode = (node, data, formValue) =>
	// 这里认为当前节点点击增加的时候是增加的子集
    data.map(item => {
      if (item.key == node.key) {
        //新建子级
        if (item.children) {
          item.children.push({
            value: formValue.orgName,
            defaultValue: 'default',
            key: node.key + Math.random(100), // 这个 key 应该是唯一的。 Tip: The key should be unique
            parentKey: node.key,
            isEditable: false,
            isOpera: true,
            // status:formValue.linkLabel
          });
        } else {
          item.children = [];
          item.children.push({
            value: formValue.orgName,
            defaultValue: 'default',
            key: node.key + Math.random(100),
            parentKey: node.key,
            isEditable: false,
            isOpera: true,
            // status:formValue.linkLabel
          });
        }
        return
      }
      if (item.children) {
        this.addNode(node, item.children, formValue);
      }
    });
	addCancel = () => {
		this.setState({
			isAddVisible: false
		})
	}

	editOk = (v) => {
		console.log(v)
		const { key,
			editItem,
			modifyValue, treeData} = this.state
		this.editNode(key, this.data, v)
		console.log(this.state.treeData)
		this.setState({	
			editVisiable: false
		})
	};
	editNode = (key, data, value) =>
    data.map(item => {
      if (item.key === key) {
		item.isEditable = true;
		item.value = value.orgName;
      } else {
        // item.isEditable = false;
      }
    //   item.value = item.defaultValue; // 当某节点处于编辑状态，并改变数据，点击编辑其他节点时，此节点变成不可编辑状态，value 需要回退到 defaultvalue
      if (item.children) {
        this.editNode(key, item.children, value);
      }
    });
	editCancel = () => {
		this.setState({
			editVisiable: false
		})
	}

	render() {
		const { treeData, checkedKeys, showSearch, isAddVisible, editVisiable, editItem, modifyValue  } = this.state;
		return (
			<div className="tree-sync">
				{showSearch ? (
					<Search placeholder="请输入" onSearch={(val) => this.onSearch(val)} className="tree-sync-search" />
				) : null}
				<Tree
					// {...Object.assign(defaultProps.config, this.props.config)}
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
					{this.renderTreeNodes(treeData)}
				</Tree>

				<Modal
					title="新增标签"
					visible={isAddVisible}
					destroyOnClose={true}
					onCancel={this.addCancel}
					onOk={this.addOk}
					footer={null}
					centered
					width="500px"
				>
					<AddLable addCancel={this.addCancel} addOk={this.addOk}></AddLable>
					{/* Cancel={this.addCancel} addOk={this.addOk}  */}
				</Modal>

				<Modal
					title="修改标签"
					visible={editVisiable}
					destroyOnClose={true}
					onCancel={this.editCancel}
					onOk={this.editOk}
					footer={null}
					centered
					width="500px"
				>
					<EditableItem editCancel={this.editCancel} editOk={this.editOk}></EditableItem>
				</Modal>
			</div>
		);
	}
}
TreeSync.propTypes = propTypes;
// TreeSync.defaultProps = defaultProps;
export default TreeSync;
