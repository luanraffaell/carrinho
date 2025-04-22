export function Cart() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492318452"
                    alt="Logo produto"
                    className="w-28"
                />
                <strong>Preço: R$1000</strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer">-</button>
                    2
                    <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer">+</button>
                </div>

                <strong className="float-right">
                    SubTotal: R$ 1000
                </strong>
            </section>
            <p className="font-bold mt-4" >Total: R$1.000</p>
        </div>
    )
}