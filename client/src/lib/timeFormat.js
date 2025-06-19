const timeFormat = (minutes)=>{
const hours = Math.floor(minutes / 60);
const minutes_Remainder = minutes % 60;
return `${hours}h ${minutes_Remainder}m`
}

export default timeFormat