// URLからパラメータ（categoryやproductなど）を取得する関数
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// リストをHTMLに描画する関数
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = '';
  }

  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

// ヘッダーとフッターを読み込む関数
export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate('../partials/header.html');
  const footerTemplate = await loadTemplate('../partials/footer.html');

  const headerElement = document.querySelector('#main-header');
  const footerElement = document.querySelector('#main-footer');

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML('afterbegin', template);
  if (callback) {
    callback(data);
  }
}

export async function convertToJson(response) {
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Bad Response');
  }
}