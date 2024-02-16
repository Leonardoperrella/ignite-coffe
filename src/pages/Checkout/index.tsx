import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    AddressContainer,
    AddressForm,
    AddressHead,
    CheckoutContainer,
    CoffeeInfo,
    InfoContainer,
    InputText,
    ItemContainer,
    MainContainer,
    PaymentContainer,
    PaymentHead,
    PaymentMethodContainer} from "./styles";

import {
    Bank,
    CreditCard,
    CurrencyDollar,
    MapPin,
    Money,
    Trash} from 'phosphor-react'
import { useForm } from 'react-hook-form';
import { Radio } from './components/Radio';
import imgExTradicional from '../../assets/Coffes/exp-tradicional.svg'
import { QuantityInput } from '../../components/QuantityInput';

  const newOrderSchema = zod.object({
    cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número'),
    fullAddress: zod.string(),
    neighborhood: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    state: zod.string().min(1, 'Informe a UF'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
      invalid_type_error: 'Informe um método de pagamento',
    }),
  })

  type NewOrderFormData = zod.infer<typeof newOrderSchema>

export function Checkout(){

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderSchema),
    // defaultValues: {
    //   cep: 0,

    // },
  })


  const { handleSubmit, watch, reset, register, formState: { errors } } = newOrderForm

  const selectedPaymentMethod = watch('paymentMethod')

  return (
  <MainContainer>
    <InfoContainer>
      <h3>Complete seu pedido</h3>
      <form action="">
        <AddressContainer>
          <AddressHead>
            <MapPin size={22} />
            <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHead>
          <AddressForm>
            <InputText
              type="text"
              placeholder="CEP"
              {...register('cep')}
            />
            <InputText
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
            <InputText
              type="text"
              placeholder="Numero"
              {...register('number')}
            />
            <InputText
              type="text"
              placeholder="Complemento"
              {...register('fullAddress')}
            />
            <InputText
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <InputText
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <InputText
              type="text"
              placeholder="UF"
              {...register('state')}
            />
          </AddressForm>
        </AddressContainer>
        <PaymentContainer>
          <PaymentHead>
              <CurrencyDollar size={22} />
              <div>
                  <span>Pagamento</span>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
          </PaymentHead>
          <PaymentMethodContainer>
            <div>
              <Radio
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>
          </PaymentMethodContainer>

        </PaymentContainer>
      </form>
        <CheckoutContainer>
          <ItemContainer>
            <img src={imgExTradicional} alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <CoffeeInfo>
                <QuantityInput/>
                <button>
                  <Trash />
                  <span>Remover</span>
                </button>
              </CoffeeInfo>
            </div>
            <div>
              <span>9.90</span>
            </div>
          </ItemContainer>
        </CheckoutContainer>

    </InfoContainer>
  </MainContainer>

  )
}