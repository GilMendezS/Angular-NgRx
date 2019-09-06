import  { IPostState, initialPostState } from '../states/post.state'
import { PostActions, EPostActions } from '../actions/post';

export const postReducers = (
    state = initialPostState,
    action:  PostActions
): IPostState => {
    switch( action.type ) {
        case EPostActions.GetPostsSuccess: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case EPostActions.AddPostSuccess: {
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        }
        case EPostActions.RemovePostSuccess: {
            return {
                ...state, 
                posts: state.posts.filter( p => p.id != action.payload )
            }
        }
        case EPostActions.AddLastPost: {
            return {
                ...state,
                lastPost: action.payload
            }
        }
        default:
            return state;
    }
} 