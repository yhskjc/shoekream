/**
 * 
 */
 
function search()
{
	alert('검색');
}

function notifyStatusSearch()
{
	if(!isSearchTextInputed()) $('#input-clear-container').hide();
	else $('#input-clear-container').show();
}

function isSearchTextInputed()
{
	let text = $('#search-input').val();
	console.log(text);
	if(text.length > 0) return 1;
	else return 0;
}

function clearSearchText()
{
	document.getElementById('search-input').value = '';
}


function notifyNextSlide() {
    console.log('next');
}

function notifyBackSlide() {
    console.log('back');
}

function unfoldNotice(id)
{
    $("#notice-"+id).toggle();
}

function unfoldFAQ(id)
{
	$("#answer-"+id).toggle();
}

function applyMypage()
{
	alert('변경완료');
}

function unregister()
{
	if(confirm('회원탈퇴를 할 경우, 모든 정보가 삭제됩니다') === true)
	{
		location.href='/';
	}
}

function showPopuppw() 
{ 
	window.open("password.jsp", "비밀번호변경", "width=500, height=300, left=100, top=50"); 
}

function showPopupmail() 
{ 
	window.open("email.jsp", "이메일변경", "width=500, height=300, left=100, top=50"); 
}

function showPopuptel() 
{ 
	window.open("tel.jsp", "전화번호변경", "width=500, height=300, left=100, top=50"); 
}

function findAddrssess()
{
    new daum.Postcode(
	{
        oncomplete: (data)=>  
        {  			        	
            console.log(data);  			        	
            let roadAddr = data.roadAddress; // 도로명 주소 변수
            let jibunAddr = data.jibunAddress; // 지번 주소 변수
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postal').value = data.zonecode;
            if(roadAddr !== '') document.getElementById("adress").value = roadAddr;
            else if(jibunAddr !== '')document.getElementById("adress").value = jibunAddr;
            
        }
    }).open();
}  	