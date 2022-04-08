
const colorPrice ={"blue":3,"red":4,"black":2,"green":5}
const widthPrice =[{start:0, end:10 ,price:10},{start:11, end:20 ,price:15},{start:21, end:30,price:16}]
const heightPrice =[{start:0 , end:10 ,price:12},{start:11 , end:20 ,price:15},{start:21, end:30 ,price:17}]


function calculatePrice(color,width,height) {
    const cPrice = colorPrice[color];
    const wPrice = widthPrice.reduce((acc,w)=>{
        if(width >= w.start && width <=w.end) acc=w.price;
        return acc;
    },[0])
    const hPrice = heightPrice.reduce((acc,h)=>{
        if(height >= h.start && height <= h.end)acc =h.price;
        return acc
    },[0])
    return cPrice * wPrice * hPrice
}

console.log(calculatePrice("blue",15,7));
