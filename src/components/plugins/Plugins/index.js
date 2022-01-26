import PluginPreview from './PluginPreview';
import PluginInsertImage from "./PluginInsertImage";
//唯一的插件编码 ： 插件配置
const plugin = {
    PluginPreview: PluginPreview,
    PluginInsertImage
}
//这么做是为了将插件的名称和id传给插件生成器
//不采用props的原因是为了减少渲染次数
Object.keys(plugin).forEach(key => {
    plugin[key].component = plugin[key].component({ id: key, label: plugin[key].label, tool: plugin[key].tool })
})
export default plugin;
