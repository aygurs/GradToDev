interface FormattedTextProps {
  text: string;
  className?: string;
}

function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="inline-code">
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function looksLikeCode(text: string) {
  const trimmed = text.trim();

  if (!trimmed) return false;

  return /[{};=<>]/.test(trimmed)
    || trimmed.startsWith('const ')
    || trimmed.startsWith('let ')
    || trimmed.startsWith('function ')
    || trimmed.startsWith('type ')
    || trimmed.startsWith('interface ')
    || trimmed.startsWith('class ')
    || trimmed.startsWith('if ')
    || trimmed.startsWith('for ')
    || trimmed.startsWith('@media')
    || trimmed.startsWith('@keyframes')
    || trimmed.includes('=>')
    || trimmed.includes(': ');
}

export function FormattedText({ text, className }: FormattedTextProps) {
  const blocks = text.split(/\n\s*\n/g);

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const trimmedBlock = block.trim();

        if (!trimmedBlock) return null;

        const exampleMatch = trimmedBlock.match(/^Example:\s*\n?([\s\S]*)$/i);
        if (exampleMatch) {
          const exampleCode = exampleMatch[1].trim();

          return (
            <div key={index} className="example-block">
              <p className="example-block-label">Example:</p>
              {exampleCode ? (
                <pre className="code-snippet"><code>{exampleCode}</code></pre>
              ) : null}
            </div>
          );
        }

        if (looksLikeCode(trimmedBlock) && trimmedBlock.includes('\n')) {
          return (
            <pre key={index} className="code-snippet"><code>{trimmedBlock}</code></pre>
          );
        }

        return (
          <p key={index} className="formatted-paragraph">
            {renderInlineCode(trimmedBlock)}
          </p>
        );
      })}
    </div>
  );
}
