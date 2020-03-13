export class Likes
{
    private noOfLikes:number;

    setnoOfLikes(num : number)
    {
        this.noOfLikes = num;
    }
    
    getnoOfLikes()
    {
        return this.noOfLikes;
    }

    increaseLikes()
    {
        this.noOfLikes++;
    }

    decreaseLikes()
    {
        this.noOfLikes--;
    }
}