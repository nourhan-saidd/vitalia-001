export interface Ipost
{
  id: string;
  content: string;
  imagePath: string;
  createdAt: string;
  likes: number;
  doctorFName: string;
  doctorLName: string;
  doctorImagePath: string;
  userHasLiked?: boolean;
  isLiked: boolean;
}




