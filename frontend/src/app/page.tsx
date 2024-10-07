"use client";
import ProdutoItem from "@/components/produto/ProdutoItem";
import useProdutos from "@/data/hooks/useProdutos";
import Pagina from "@/components/template/Pagina";

export default function Inicio() {
  const { produtos } = useProdutos();
  return (
    <Pagina>
      <div className="grid grid-cols-4 gap-5 container">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
