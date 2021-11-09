function initializeLiff() {
    liff.init({
        liffId: "1656610153-LnnDqMG5"
    }).then((e) => {
        if (!liff.isLoggedIn()) {
            liff.login();
        } else {
            getUserid();
        }
    }).catch((err) => {
        console.log(err);
    });
}

async function getUserid() {
    const profile = await liff.getProfile();
    document.getElementById("usrid").value = await profile.userId;
    document.getElementById("profile1").src = await profile.pictureUrl;
    document.getElementById("displayName1").innerHTML = await profile.displayName;
    document.getElementById("profile2").src = await profile.pictureUrl;
    document.getElementById("displayName2").innerHTML = await profile.displayName;
}

initializeLiff()

var url = 'https://rti2dss.com:4000';
// var url = 'http://localhost:3000'

let loadData = () => {
    axios.post(url + '/alcohol-api/getdata', { usrid: 'usrid' }).then((r) => {
        r.data.data.map(x => {
            let img;
            x.product_type == "บุหรี่" ? img = "cigarettes.png" : null;
            x.product_type == "สุรา" ? img = "alcohol.png" : null;
            x.product_type == "บุหรี่และสุรา" ? img = "no-alcohol.png" : null;
            document.getElementById("content").innerHTML += `<div class="inner-box mt-2" >
                <div class="content" >
                    <span class="company-logo"><img src="./../images/${img}" alt=""></span>
                    <h4><span>${x.owner_name}</span></h4>
                    <ul class="job-info">
                        <li><i class="bi bi-cash-coin"></i> ${x.retail_type}</li>
                        <li><i class="bi bi-cart3"></i> ${x.product_type}</li>
                        <li><i class="bi bi-journal-check"></i> ${x.certification}ใบอนุญาต</li>
                        <li><i class="bi bi-calendar-week"></i> ${x.ndate}</li>
                    </ul>
                </div>
                <ul class="job-other-info ">
                    <li class="f-16 privacy cursor" onclick="editData('${x.pid}')"><i class="bi bi-clipboard-data"></i> รายละเอียด</li>
                    <li class="required cursor" onclick="deleteData('${x.pid}')"><i class="bi bi-trash"></i> ลบ</li>
                </ul>
            </div>`
        })
    })
}

let deleteData = (pid) => {
    axios.post(url + '/alcohol-api/delete', { pid }).then(r => {
        document.getElementById("content").innerHTML = "";
        loadData()
    })
}

let editData = (pid) => {
    location.href = "./../edit/index.html?pid=" + pid;
}

loadData()

