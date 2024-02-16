import { CardContainer, CartContainer, ChoiceContainer, PriceContainer, SelectItemContainer, TagContainer } from "./styles";
import cart from '../../../../assets/cart-white.svg'
import { QuantityInput } from "../../../../components/QuantityInput";

interface CoffeProps {
    tags: string[]
    img: string
    title: string
    description: string
    price: number
}


export function CoffeCard({img, tags, title, description, price }: Readonly<CoffeProps>){
    return (
    <CardContainer>
        <img src={img} alt="" />
        <TagContainer>
           {tags.map((tag)=><span key={tag}>{tag}</span>)}

        </TagContainer>
        <h3>{title}</h3>
        <p>{description}</p>

        <SelectItemContainer>
            <PriceContainer>
                <span>R$</span>
                <span>{price}</span>
            </PriceContainer>
            <ChoiceContainer>
                <QuantityInput/>
                <CartContainer>
                    <img src={cart} alt="" />
                </CartContainer>
            </ChoiceContainer>
        </SelectItemContainer>
    </CardContainer>
    )
}