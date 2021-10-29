import { ISanf } from "../../models";

const GridItem: React.FC = (props: any) => {
    ///console.log(props)
    const {sanf}=props
    return(
        <div className={`grid-item ${sanf.categorynamE}` }>
                                        <div className="grid-inner ">

                                            <div className="grid-thumb">
                                                <img
                                                    src="./assets/images/movie/popcorn/pop1.png"
                                                    alt="movie/popcorn"
                                                />
                                                <div className="offer-tag">{sanf.Price}</div>
                                                <div className="offer-remainder">
                                                    <h6 className="o-title mt-0">24%</h6>
                                                    <span>off</span>
                                                </div>
                                            </div>
                                            <div className="grid-content">
                                                <h5 className="subtitle">
                                                    <a href="#0">{sanf.NamEnglish}</a>
                                                </h5>
                                                <form className="cart-button">
                                                    <div className="cart-plus-minus">
                                                        <input
                                                            className="cart-plus-minus-box"
                                                            type="text"
                                                            name="qtybutton"
                                                            defaultValue={2}
                                                        />
                                                    </div>
                                                    <button type="submit" className="custom-button">
                                                        add
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
    )
}
export default GridItem;