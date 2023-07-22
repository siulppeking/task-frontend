import svg from '../assets/react.svg';

import './loading.css';

export const Loading = () => {
    return (
        <div className="modal-preload">
            <div className="circles">
                <div className="circle"></div>
                <div className="mainLogo"><i className="preloadEc"></i>
                    <img src={svg} alt="" />
                </div>
            </div>
        </div>
    )
}
