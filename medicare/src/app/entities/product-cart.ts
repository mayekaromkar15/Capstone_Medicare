export class ProductCart {

    id : Number;
    name: String;
    description: String;
    price: Number;
    imageurl : String;

    constructor(id, name, description, price = 0, imageurl = 'https://in.images.search.yahoo.com/images/view;_ylt=AwrwJTSwBrZgPyoAJoUO9olQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2YzNjc4NWYwNjFlMDljZGQzZTI0MTMzY2I5YTY4OWQ2BGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Drubik%2Bcuve%26ei%3DUTF-8%26type%3Dsmy_ydef2f_19_47_xtn%26fr%3Dyhs-itm-001%26hsimp%3Dyhs-001%26hspart%3Ditm%26param1%3D1%26param2%3Df%253D4%2526b%253Dchrome%2526ip%253D106.209.241.32%2526pa%253Dsearch-manager%2526type%253Dsmy_ydef2f_19_47_xtn%2526cat%253Dweb%2526a%253Dsmy_ydef2f_19_47_xtn%2526xlp_pers_guid%253D00af6b8c20d01fb2aa2884571980ef09%2526xlp_sess_guid%253D5edb8e5c-b957-4e6e-a4b4-91b338caae03%2526uref%253D%2526abid%253D%2526xt_abg%253D%2526xt_ver%253D10.1.4.53%2526ls_ts%253D1574360903%26tab%3Dorganic%26ri%3D3&w=1600&h=1600&imgurl=cdn.shopclues.com%2Fimages%2Fdetailed%2F633%2Frubiks_1371115158.jpg&rurl=http%3A%2F%2Fwww.shopclues.com%2Frubiks-cube-en-2.html&size=786.4KB&p=rubik%27s+cube&oid=f36785f061e09cdd3e24133cb9a689d6&fr2=&fr=yhs-itm-001&rw=rubik%27s+cube&tt=Rubik%26%2339%3Bs+Cube&b=0&ni=21&no=3&ts=&tab=organic&sigr=nT1w6Qj3_tM.&sigb=4TPw1NyIksVh&sigi=GkXY7Y2FKHgs&sigt=tZPRfwfHOhxD&.crumb=j0YhyglbHA5&fr=yhs-itm-001&hsimp=yhs-001&hspart=itm&type=smy_ydef2f_19_47_xtn&param1=1&param2=f%3D4%26b%3Dchrome%26ip%3D106.209.241.32%26pa%3Dsearch-manager%26type%3Dsmy_ydef2f_19_47_xtn%26cat%3Dweb%26a%3Dsmy_ydef2f_19_47_xtn%26xlp_pers_guid%3D00af6b8c20d01fb2aa2884571980ef09%26xlp_sess_guid%3D5edb8e5c-b957-4e6e-a4b4-91b338caae03%26uref%3D%26abid%3D%26xt_abg%3D%26xt_ver%3D10.1.4.53%26ls_ts%3D1574360903'){
        this.id = id, 
        this.name = name, 
        this.description = description;
        this.price = price;
        this.imageurl = imageurl;
    }
}
