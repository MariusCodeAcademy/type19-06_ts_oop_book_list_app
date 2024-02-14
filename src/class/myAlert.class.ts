import createHtmlEL from '../helper/createEl.js';

type AlertType = 'success' | 'danger' | 'warning';

export default class MyAlert {
  constructor(public message: string, public type: AlertType) {
    const alertEl = createHtmlEL<HTMLDivElement>(
      'div',
      { class: `alert alert-${type} my-alert position-absolute w-100 t-0`, role: 'alert' },
      message,
    );
    document.body.prepend(alertEl);

    setTimeout(() => {
      alertEl.remove();
    }, 3000);
  }
}

/* 
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

*/
