/**
 * Created by min on 2016-11-23.
 */

var image1Female = require('../../../images/tinder/kmk_sample.png')
var image2Female = require('../../../images/tinder/minkyung1.jpg')
var image3Female = require('../../../images/tinder/minkyung2.jpg')
var image4Female = require('../../../images/tinder/minkyung3.jpg')
var image5Female = require('../../../images/tinder/minkyung4.jpg')
var image6Female = require('../../../images/tinder/minkyung5.png')

var logoImage = require('../../../images/cupid.png')
var imageHolder = require('../../../images/imageHolder.png')
var image1Male = require('../../../images/tinder/nam1.jpg')
var image2Male = require('../../../images/tinder/nam2.jpg')
var image3Male = require('../../../images/tinder/nam3.jpg')
var image4Male = require('../../../images/tinder/nam4.jpg')
var image5Male = require('../../../images/tinder/nam5.jpg')
var image6Male = require('../../../images/tinder/nam6.jpg')

var dummies = Object.freeze({
    maleCards :[{
        "id": 0,
        "first_name": "차은우",
        "age": 20,
        "job":"성균관대학교/연예인",
        "self_intro":"안녕하세요. 아스트로 차 입니다.",
        "personality":"낙천적인, 상냥한, 외향적인,",
        "hobbies":"노래, 댄스, 연기",
        "datePref":"솔직하신분이 좋습니다.",
        "interestsGroup":[
            {
                item1: '음식',
                item2: '문화탐방',
                item3: '유럽여행',
            },
            {
                item4: '노래',
                item5: '댄스',
                item6: '연기',

            }],
        "image": [{
           link1:"http://blossome.be/movely/cha1.jpg",
           link2: "http://blossome.be/movely/cha2.jpg",
           link3:"http://blossome.be/movely/cha3.jpg ",
           link4: "http://blossome.be/movely/cha4.jpg ",
           link5: "http://blossome.be/movely/cha5.jpg "},
        ],
        "video":[{link1:"http://blossome.be/movely/chaVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/chaThumb.jpg",
    }, {
        "id": 1,
        "first_name": "문 킴",
        "age": 26,
        "job":"밴드그룹보컬",
        "self_intro":"안녕하세요. 반갑습니다.",
        "personality":"뭐든 이루지 않으면 직성이 풀리지 않는 성격입니다 ㅎㅎ",
        "hobbies":"작곡, 독서,운동, 영화",
        "datePref":"따듯하고 배려심있는 사람.",
        "interestsGroup":[
            {
                item1: '끝나지 않는 꿈',
                item2: '독서삼매경',
                item3: '수제맥주',
            },
            {
                item4: '맛집탐방',
                item5: 'Amadeus',
                item6: '500일의썸머',

            }],
        "image": [
            {link1:"http://blossome.be/movely/yiruma1.jpg",
            link2:"http://blossome.be/movely/yiruma2.jpg",
            link3:"http://blossome.be/movely/yiruma3.jpg ",
            link4:"http://blossome.be/movely/yiruma4.jpg ",
            link5:"http://blossome.be/movely/yiruma5.jpg ",}
        ],
        "video":[{link1:"http://blossome.be/movely/yirumaVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/yirumaThumb.jpg",
    }, {
        "id": 2,
        "first_name": "이종석",
        "age": 28,
        "job":"탤런트/배우",
        "self_intro":"배우 이종석 입니다..",
        "personality":"조용함, 하나에 집중하는 스타일이에요 ㅎㅎ",
        "hobbies":"집에서 내가 나오는 드라마 보기",
        "datePref":"박신혜??.",
        "interestsGroup":[
            {
                item1: '연기',
                item2: '패션',
                item3: '쇼핑',
            },
            {
                item4: '요리',
                item5: '드라마대본읽기',
                item6: '노래방가기',

            }],
        "image": [
            {link1:"http://blossome.be/movely/jonngseok1.jpg",
            link2:"http://blossome.be/movely/jonngseok2.jpg",
            link3:"http://blossome.be/movely/jonngseok3.jpg",
            link4:"http://blossome.be/movely/jonngseok4.jpg",
            link5:"http://blossome.be/movely/jonngseok5.jpg"}
        ],
        "video":[{link1:"http://blossome.be/movely/jonngseokVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/jonngseokThumb.jpg",
    },
    ],

    femaleCards :[{
        "id": 0,
        "first_name": "하니",
        "age": 23,
        "job":"탤런트/배우",
        "self_intro":"주말 함께 보내실분, 연락 잘되시는분 좋아요",
        "personality":"활발, 창의적, 귀여움",
        "hobbies":"등산, 여행, 필라테스",
        "datePref":"다정다감, 여행을 좋아하시는분",
        "interestsGroup":[
            {
                item1: '태도에 관해서',
                item2: '크로아티아',
                item3: '마블영화',
            },
            {
                item4: '이프온니',
                item5: '안녕헤이즐',
                item6: '500일의썸머',

            }],
        "image": [
            {link1:"http://blossome.be/movely/honey1.jpg",
                link2:"http://blossome.be/movely/honey2.jpg",
                link3:"http://blossome.be/movely/honey3.jpg",
                link4:"http://blossome.be/movely/honey4.jpg"}
            ,
        ],
        "video":[{link1:"http://blossome.be/movely/honeyVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/honeyThumb.png",
    },{
        "id": 1,
        "first_name": "쯔위",
        "age": 18,
        "job":"가수/연예인",
        "self_intro":"귀여운 트와이스 막내 쯔위입니다.",
        "personality":"활발하고 씩씩 합니다.",
        "hobbies":"공연, 맛집",
        "datePref":"유쾌하고 즐거운 남자분",
        "interestsGroup":[
            {
                item1: '볼링',
                item2: '산책',
                item3: '마블영화',
            },
            {
                item4: '이프온니',
                item5: '공연가기',
                item6: '악세서리',

            }],
        "image": [
            {link1:"http://blossome.be/movely/tsu/tsu1.jpg",
            link2:"http://blossome.be/movely/tsu/tsu2.jpg",
            link3:"http://blossome.be/movely/tsu/tsu3.jpg ",
            link4:"http://blossome.be/movely/tsu/tsu4.jpg ",
            link5:"http://blossome.be/movely/tsu/tsu5.jpg "}
        ],
        "video":[{link1:"http://blossome.be/movely/tsuVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/tsu/tsuThumb.jpg",
    }, {
        "id": 2,
        "first_name": "민아",
        "age": 24,
        "job":"가수/연예인",
        "self_intro":"안녕하세요. 걸스데이에서 보컬이자 귀여움을 담당하는 마스코트 민아입니다",
        "personality":" 조금 덜렁대는 성격이지만 눈웃음이 제 매력포인트입니다.",
        "hobbies":"볼링이나 가벼운 산책이구요",
        "datePref":"다정하고 자기 일에 열정을 가진 사람입니다.",
        "interestsGroup":[
            {
                item1: '아기자기한 소품',
                item2: '스페인',
                item3: '마블영화',
            },
            {
                item4: '강아지',
                item5: '필라테스',
                item6: '캐치미이프유캔',

            }],
        "image": [
            {link1:"http://blossome.be/movely/minah1.jpg",
            link2:"http://blossome.be/movely/minah2.jpg",
            link3:"http://blossome.be/movely/minah3.jpg ",
            link4:"http://blossome.be/movely/minah4.jpg ",
            link5:"http://blossome.be/movely/minah5.jpg "}
        ],
        "video":[{link1:"http://blossome.be/movely/minahVideo.mp4"}],
        "videoThumbnail":"http://blossome.be/movely/minahThumb.jpg",
    },
    ]


})

module.exports = dummies;
