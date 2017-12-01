import { FormGroup} from '@angular/forms';
import { AppFormGroup } from '../../shared/common/app.form';

export class ResetPasswordForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {

        group.addControl("auth_password", this.getController(null, this.TYPE_EMAIL, null, 50));
        group.addControl("auth_confirmpassword", this.getController(null, this.TYPE_DATA, null, 50));
    }
}