
export class UserRoleClass {

    constructor() {
        
    }

    AddNewUser(userForm, containerID) {
        let userRole = new UserRoleClass()
        $.ajax({
            type: 'Post',
            url: '/Home/AddToUserList',
            data: $(userForm).serialize(),
            success: function (message) {
                console.log("???")
                $(`#${containerID}`).html(message);
                userRole.attachDeleteListener(containerID);
            }
        });
    }

    attachDeleteListener(formContainerID) {
        let userRole = new UserRoleClass()
        let deleteBtn = document.querySelectorAll(".editBtn");
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', function () {
                let name = deleteBtn[i].getAttribute('deleteby');
                userRole.DeleteUser(name, formContainerID)
                
            });
        }

    }

     DeleteUser(name, containerID) {
         $.ajax({
            type: 'Post',
            url: '/Home/DeleteUser',
            data: { name },
            success: function (message) {
                $(`#${containerID}`).html(message);
            }
        });

    }
}

