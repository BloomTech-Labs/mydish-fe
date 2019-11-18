let LeftImageHeight = 0;
let RightImageHeight = 0;
let LeftHeight = 0;
let RightHeight= 0;

export const LeftHeightAdjustment = () => {    
    if(LeftHeight === 0){  
        LeftHeight= LeftHeight +1
        return 220
    }if(LeftHeight===1){
        LeftHeight = LeftHeight -1
        return 250
    }
}
export const RightHeightAdjustment = () => {     
    if(RightHeight === 2){  
        RightHeight= RightHeight +1
        return 235
    }if(RightHeight===3){
        RightHeight = RightHeight -1
        return 225
    }
}
export const LeftAdjustImageHeight = () => {  
    if(LeftImageHeight === 0){  
        LeftImageHeight= LeftImageHeight +1
        return 150
    }if(LeftImageHeight===1){
        LeftImageHeight = LeftImageHeight -1
        return 185
    }
}
export const RightAdjustImageHeight = () => {  
    if(RightImageHeight === 0){  
        RightImageHeight= RightImageHeight +1
        return 185
    }if(RightImageHeight===1){
        RightImageHeight = RightImageHeight -1
        return 150
    }
}

export const divideArray =(recipes)=>{
    if(Math.floor(recipes.length/2)  ==0){
        return 1
    }else{
        return Math.floor(recipes.length/2) 
    }      
}