// React组件卸载、路由跳转、页面关闭（刷新）之前进行提示（
// 如果是AntD Modal弹窗里面的表单，也可视情考虑
// 将maskClosable属性设置为false，防止误点蒙层导致弹窗关闭）：


//监听窗口事件
useEffect(() => {
    const listener = (ev) => {
      ev.preventDefault();
      ev.returnValue = '确定离开吗？';
    };
    window.addEventListener('beforeunload', listener);
    return () => {
      // 在末尾处返回一个函数
      // React 在该函数组件卸载前调用该方法（实现 componentWillUnmount）
      window.removeEventListener('beforeunload', listener);
    };
  }, []);