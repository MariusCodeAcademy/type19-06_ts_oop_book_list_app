import createHtmlEL from '../helper/createEl.js';

type AlertType = 'success' | 'danger' | 'warning';

export default class MyAlert {
  constructor(public message: string, public type: AlertType) {
    const alertEl = createHtmlEL<HTMLDivElement>(
      'div',
      { class: `alert alert-${type} my-alert`, role: 'alert' },
      message,
    );
    document.body.prepend(alertEl);
  }
}

/* 
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

*/
