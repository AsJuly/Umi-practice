// import React from 'react'
// import { Editor } from 'slate-react'  //引入slate富文本
// import {State} from 'slate'

// const initialState = State.fromJSON({
//     document: {
//       nodes: [
//         {
//           kind: 'block',
//           type: 'paragraph',
//           nodes: [
//             {
//               kind: 'text',
//               ranges: [
//                 {
//                   text: 'A line of text in a paragraph.'
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   })
// class Slate extends React.Component {
//     // 设置应用创建时的初始状态。
//     state = {
//         state: initialState
//       }
//       // 发生变更时，使用新的编辑器状态更新应用的 React 状态。
//   onChange = ({ state }) => {
//     this.setState({ state })
//   }
//   render() {
//     return (
//         <Editor
//         state={this.state.state}
//         onChange={this.onChange}
//       />
//     )
//   }
// }

// export default Slate

import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { useState ,useEffect} from 'react'

export default function WangEditor() {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法

    // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p>hello world</p>')
        }, 1500)
    }, [])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <div className='box'>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
        </div>
    )
}
