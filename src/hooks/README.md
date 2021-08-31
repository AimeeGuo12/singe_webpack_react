# hooks UI与业务分离

## 使用方式
```javaScript
<Start model = {model}>
  <Componnet/>
</Start>
```

### model 的形式
```javaScript
{
    name: 'emp',
    data: {

    },
    sync: {
        update(state, payload) {
            return {
                ...state,
                ...paylaod
            }
        }
    },
    async: {
        getData() {

        }
    }
}
```

```javaScript
// 使用更新的时候
dispatch({
    type: 'emp/update'
})
```