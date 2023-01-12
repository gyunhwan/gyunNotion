# gyunNotion
1차 버전
1차 목표 기능들 
--------------------------------------------
1. 사용자는 페이지를 생성한다.
1-1 1차버전에서는 페이지의 타입은 page로 고정된다.
1-2 추후 차트(간트, 칸반,투두리스트)가 추가될 예정이다.
2. 페이지에는 타이틀과(커버이미지,아이콘, 제목)과 여러 블록들로 이루어진다.
3. 블록은 하나의 리액트 컴포넌트로 이루어지고 에디터로 하나의 html로 변환이 가능한 text가 저장될 예정이다.
4. 블록은 드래그 앤 드랍을 통해 순서 조정이가능하다.
5. 블록은 원하는 원하는 부분을 드래그해서 댓글을 달 수 있다.
6. 블록은 원하는 부분을 드래그해서 링크를 달 수 있다.
7. 블록은 각각의 url을 가지고 있으며 해당 url을 통해 포커스 될 수 있게 구현 되어야 한다.
8. 블록의 종류는 노션의 기본블럭(텍스트, 페이지,할일목록,제목,표,글머리기호, 번호,ㅡ토글목록, 인용,구분선, 페이지 링크, 콜아웃)을 따른다.
9. 블록안 컨텐츠에는 맨션이 가능하며 맨션은 참여자,블록, 페이지, 날짜를 링크 할 수 있다.

타입들 [Page, Block, image, Link, Text]
model Page {
  object   String    @default("page") // 상위에 정의한 타입들이 될 예정
  id       String    @id  uuid
  cover    Image?  // 상위 헤더에 커버 이미지가 될예정
  icon     String? // 상위 헤더에 아이콘이 될 예정
  property Property? //헤더용 이름과 설명이 될 예정
  name     String // document.title
  url      String // /pageId/BlockId구조를 가질 예정
  children Block[] 
}

type Block { 하나의 row가 될 예정
  object       String  @default("block") // 상위에 정의한 타입들이 될 예정
  type         String // HTML 태그가 될 예정 추후에 React로 커스텀한 Tag도 추가할 예정
  content      Text 안에 들어갈 태그들이 될 예정
  has_children Boolean @default(false) 
  children Block  ?
}

type Image {
  link Link // imageUrl 
  name String // 이미지의 이름 alter로 쓸 예정
}

type Link {
  url String // url
}

type Property {
  Name        Text //Header(레이아웃)용 타이틀 제목
  Description Text? //Header(레이아웃)용 타이틀 설명
}

type Text {
  type        String // HTML태그
  text        TextContent[] // dangerousHtml이 될예정
  annotations Annotations // 스타일들
  checked     Boolean?    @default(false)
  language    String?
}

type Annotations {
  classes String[] //TailWindCSS의 클래스네임이 들어갈 예정
  color     String? // 폰트 칼라는 따로 필요할 거같아 추가
}

type TextContent {
  id //uuid
  type String //Comment가생각나서 추가
  content String 안에 들어갈 글자
  link    Link?
}
type Comment{//노션 특정 부분 드래그 댓글을 위한 구조 
  comment_id string //uuid
  user_no sttring // db bigint
  content string //
  create_date string
  update_date string
}

![image](https://user-images.githubusercontent.com/48306336/212097764-45ed2058-4c24-40ab-89f3-1fe350b7b923.png)


