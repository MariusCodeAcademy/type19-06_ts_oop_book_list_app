import createHtmlEL from '../helper/createEl.js';

type AlertType = 'success' | 'danger' | 'warning' | 'info';

export default class MyAlert {
  constructor(public message: string, public type: AlertType) {
    this.render();
  }

  public render() {
    const alertEl = createHtmlEL<HTMLDivElement>(
      'div',
      { class: `alert alert-${this.type} my-alert position-absolute w-100 t-0`, role: 'alert' },
      this.message,
    );
    document.body.prepend(alertEl);

    setTimeout(() => {
      alertEl.remove();
    }, 3000);
  }
}

export class SuccessAlert extends MyAlert {
  constructor(message: string) {
    super(message, 'success');
  }
}
export class PermanentAlert extends MyAlert {
  constructor(message: string) {
    super(message, 'info');
  }

  public override render() {
    const alertEl = createHtmlEL<HTMLDivElement>(
      'div',
      { class: `alert alert-${this.type} my-alert position-absolute w-100 t-0`, role: 'alert' },
      this.message,
    );
    document.body.prepend(alertEl);
  }
}

/* 
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

*/
