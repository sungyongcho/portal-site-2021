import styled from 'styled-components';
type Props = {
  content: string,
  textSize: string
}

const TextContent = ({ content, textSize }: Props) => {
  const TextSize = styled.div`
  font-size: ${textSize};
  `;

  return (
    <div className="max-w-2xl mx-auto">
      <TextSize
        dangerouslySetInnerHTML={{ __html: content }}
      ></TextSize>
    </div>
  )
}

export default TextContent
