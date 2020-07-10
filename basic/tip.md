<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



    변수의 자료형 확인 연산자 = typeof()
    문자열을 숫자로 변환 = parseInt(), parseFloat()

    배열을 다루는 메소드 이름

메소드 이름|설명
push()|추가
pop()|삭제
shift()|맨 앞 삭제
unshift()|맨 앞 추가
delete()|n번째꺼 지우고 자리남김
splice(n, x, y)|n번쨰자리부터 x개 지우고, y를 추가
slice(n, x)|var user2 = user1.slice(n, x) n번째부터 x개를 Y로 지정.

    fs 메소드
    
    메소드 이름 - 설명
readFile(path[, options], callback) 비동기식 IO로 파일을 읽어 들입니다.
readFileSync(path[, options]) 동기식 IO로 파일을 읽어 들입니다.
writeFile(file, data[, options], callback) 비동기식 IO로 파일을 씁니다.
writeFileSync(file, data[, options]) 동기식 IO로 파일을 씁니다.

    open(path, flags, [model], [callback]) - 파일 열기
    read(fd, offset, length, position, [callback]) - 지정한 부분의 파일 내용 읽기
    write(fd, buffer, offset, length, position, [callback]) - 파일의 지정한 부분에 데이터 쓰기
    close(fd, [callback]) - 파일 닫기

    flags..
    'r' - 읽기
    'w' - 쓰기, 파일이 없으면 생성, 있으면 덮어쓰기
    'w+' - 읽기,쓰기, 파일이 없으면 만들고, 있으면 이전내용 모두 삭제
    'a+' - 읽기,쓰기, 파일이 없으면 만들고, 있으면 이어쓰기

    createReadStream()
    createWritestream()


</body>
</html>