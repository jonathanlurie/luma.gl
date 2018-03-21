import {animationLoopOptions} from '../../core/shadowmap/app';
import {OffscreenAnimationLoop} from 'luma.gl';

export default OffscreenAnimationLoop.createWorker(animationLoopOptions);
