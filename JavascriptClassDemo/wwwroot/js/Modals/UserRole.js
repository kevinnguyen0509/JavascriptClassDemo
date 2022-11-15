
export class UserRoleClass {
    constructor() {
    }

    AddNewUser(userForm, containerID) {     
        $.ajax({
            type: 'Post',
            url: '/Home/AddToUserList',
            data: $(userForm).serialize(),
            success: function (message) {
                console.log("???")
                $(`#${containerID}`).html(message);
            }
        });
    }
}