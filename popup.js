var data = {
        1: {
            title: 'Visa',
            cardnr: '4314229999999913',
            month: '01',
            year: '20',
            cvc2: '123',
            class: 'btn-primary'
        },
        2: {
            title: 'MasterCard',
            cardnr: '5437551000000020',
            month: '01',
            year: '20',
            cvc2: '589',
            class: 'btn-primary'
        },
        3: {
            title: 'American Express',
            cardnr: '374757082030415',
            month: '01',
            year: '20',
            cvc2: '9295',
            class: 'btn-primary'
        },
        4: 'hr',
        5: {
            title: 'Incorrect exp. date',
            cardnr: '4314229999999913',
            month: '01',
            year: '22',
            cvc2: '123',
            class: 'btn-danger btn-sm'
        },
        6: {
            title: 'Successful 3D-Secure authentication',
            cardnr: '5437551000000014',
            month: '01',
            year: '20',
            cvc2: '589',
            class: 'btn-info btn-sm'
        },
        7: {
            title: 'Unsuccessful 3D-Secure authentication',
            cardnr: '4314220000000032',
            month: '01',
            year: '20',
            cvc2: '213',
            class: 'btn-danger btn-sm'
        },
        8: {
            title: '3D-Secure authentication error',
            cardnr: '4314220000000031',
            month: '01',
            year: '20',
            cvc2: '123',
            class: 'btn-danger btn-sm'
        }
}

document.addEventListener('DOMContentLoaded', function() {
    var controls = document.querySelector('#controls');
    
    for (var key in data) {
        var item = data[key];
        var html = '';
        
        if (item == 'hr') html = '<hr />';
        else html = '<a data-key="'+key+'" class="btn btn-block '+item.class+'">'+item.title+'</a>';
        
        controls.innerHTML = controls.innerHTML + html;
    }
    
    var buttons = document.querySelectorAll('a');
    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', function() {
            var key = this.dataset.key;
            var code = [
                "document.querySelector('input[name=cardname]').value='Test'",
                "document.querySelector('input[name=cardnr]').value='"+data[key].cardnr+"'",
                "document.querySelector('input[name=validMONTH]').value='"+data[key].month+"'",
                "document.querySelector('input[name=validYEAR]').value='"+data[key].year+"'",
                "document.querySelector('input[name=cvc2]').value='"+data[key].cvc2+"'",
            ].join("\n");
            chrome.tabs.executeScript(null,{
                code: code
            });
            window.close();
        });
    }
});
