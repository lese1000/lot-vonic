export function copyToClipboard(text) {
  let textArea = document.createElement("textarea");
       textArea.style.position = 'fixed';
       textArea.style.top = '0';
       textArea.style.left = '0';
       textArea.style.width = '2em';
       textArea.style.height = '2em';
       textArea.style.padding = '0';
       textArea.style.border = 'none';
       textArea.style.outline = 'none';
       textArea.style.boxShadow = 'none';
       textArea.style.background = 'transparent';
       textArea.value = text;
       document.body.appendChild(textArea);
       textArea.select();
  let copyResult = true;
  try {
    let successful = document.execCommand('copy');
    copyResult = successful ? true : false;
  } catch (err) {
    alert('该浏览器不支持点击复制到剪贴板');
    copyResult = false;
  }
  document.body.removeChild(textArea);
  return copyResult
}
