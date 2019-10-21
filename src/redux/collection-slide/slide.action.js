import SlideActionTypes from './slide.type';

export const PrevSlide = () => ({
    type: SlideActionTypes.PREV_SLIDE
});

export const NextSlide = () => ({
    type: SlideActionTypes.NEXT_SLIDE
});