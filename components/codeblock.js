import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
			<div className="codeBlock">
				<SyntaxHighlighter
					style={dracula}
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			</div>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		)
	},
}

export default CodeBlock
