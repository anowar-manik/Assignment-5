// Donate Button 1
document.getElementById('donateBtn-1').addEventListener('click', function(){
    const firstInput = parseFloat(document.getElementById('donateInput-1').value)
    const noakhaliFund = parseFloat(document.getElementById('collectMoney-1').innerText.split(' ')[0])

    const totalNoakhaliFund= firstInput + noakhaliFund
    document.getElementById('collectMoney-1').innerText=totalNoakhaliFund


    const myTotalBalance = parseFloat(document.getElementById('totalBalance').innerText.split(' ')[0])
    
    const currentBalance = myTotalBalance-firstInput
    document.getElementById('totalBalance').innerText = currentBalance
    

})
// Donate Button -1 End

// Donate Button -2 start
document.getElementById('donateBtn-2').addEventListener('click', function(){
    const secondInput = parseFloat(document.getElementById('donateInput-2').value)
    const feniFund = parseFloat(document.getElementById('collectMoney-2').innerText.split(' ')[0])

    const totalfeniFund= secondInput + feniFund
    document.getElementById('collectMoney-2').innerText = totalfeniFund;


    const myTotalBalance = parseFloat(document.getElementById('totalBalance').innerText.split(' ')[0])
    
    const currentBalance = myTotalBalance-secondInput
    document.getElementById('totalBalance').innerText = currentBalance
    

})
// Donate Button-2 end

// Donate Button-3 start
document.getElementById('donateBtn-3').addEventListener('click', function(){
    const thirdInput = parseFloat(document.getElementById('donateInput-3').value)
    const quotaFund = parseFloat(document.getElementById('collectMoney-3').innerText.split(' ')[0])

    const totalQuotaFund= thirdInput + quotaFund
    document.getElementById('collectMoney-3').innerText=totalQuotaFund;


    const myTotalBalance = parseFloat(document.getElementById('totalBalance').innerText.split(' ')[0])
    
    const currentBalance = myTotalBalance-thirdInput
    document.getElementById('totalBalance').innerText = currentBalance
    

})

// Donate Button-3 end