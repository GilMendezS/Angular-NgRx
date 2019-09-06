import { Post } from '../../models/post';

export interface IPostState { 
    posts: Post[],
    selectedPost: Post,
    lastPost: Post
}

export const initialPostState: IPostState = {
    posts: null,
    selectedPost: null,
    lastPost: null
}