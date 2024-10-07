'use client'
import useProdutos from "@/data/hooks/useProdutos";
import Pagina from "@/components/template/Pagina";

export default function PaginaProduto(props: any) {
    const { produtos } = useProdutos();

    const id = +props.params.id
    const produto = produtos.find((p) => p.id === id)
    return (
        <Pagina>
            {produto ? <div>{props.params.id}</div> : <div>Produto não encontrado</div>}
        </Pagina>
    ) 
}