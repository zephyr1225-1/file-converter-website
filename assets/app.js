const copyButton = document.querySelector('#copyHash');
const hash = document.querySelector('#apkHash');
const toast = document.querySelector('#toast');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(hash.textContent.trim());
    toast.classList.add('show');
    copyButton.textContent = '已复制';
    window.setTimeout(() => {
      toast.classList.remove('show');
      copyButton.textContent = '复制校验值';
    }, 1800);
  } catch {
    window.getSelection()?.selectAllChildren(hash);
    copyButton.textContent = '请长按复制';
  }
});
