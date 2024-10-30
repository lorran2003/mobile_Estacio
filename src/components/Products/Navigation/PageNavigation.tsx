import { lastPage, nextPage, previousPage, startPage } from '@/src/func/pagination';
import { PropsAPI } from '@/src/type/typeAPI';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface PropsPageNavigation {
    products: PropsAPI[];
    setRenderProducts: React.Dispatch<React.SetStateAction<PropsAPI[]>>;
}

export function PageNavigation({ products, setRenderProducts }: PropsPageNavigation) {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(products.length / 4);

    const handlePageNavigation = (action: string) => {

        switch (action) {

            case 'start':
                setCurrentPage(1);
                setRenderProducts(startPage(products));
                break;

            case 'previous':
                setCurrentPage(currentPage - 1);
                setRenderProducts(previousPage(currentPage * 4, products));
                break;

            case 'next':
                setCurrentPage(currentPage + 1);
                setRenderProducts(nextPage(currentPage * 4, products));
                break;

            case 'last':
                setCurrentPage(totalPages);
                setRenderProducts(lastPage(totalPages * 4, products));
                break;

            default:
                alert('Ops... algo deu errado');
                break;
        }
    }

    return (
        <View className='flex-row gap-4 justify-center items-center'>

            <TouchableOpacity
                className={'bg-[#CA9D37] rounded-md p-3 ' + (currentPage === 1 ? 'opacity-40' : null)}
                disabled={currentPage === 1 ? true : false}
                onPress={() => handlePageNavigation('start')}
            >
                <AntDesign name="doubleleft" size={20} color="white" />

            </TouchableOpacity>

            <TouchableOpacity
                className={'bg-[#CA9D37] rounded-md p-3 ' + (currentPage === 1 ? 'opacity-40' : null)}
                disabled={currentPage === 1 ? true : false}
                onPress={() => handlePageNavigation('previous')}
            >
                <AntDesign name="left" size={20} color="white" />

            </TouchableOpacity>


            <Text>Pagina - {currentPage} de {totalPages}</Text>


            <TouchableOpacity
                className={'bg-[#CA9D37] rounded-md p-3 ' + (currentPage === totalPages ? 'opacity-40' : null)}
                disabled={currentPage === totalPages ? true : false}
                onPress={() => handlePageNavigation('next')}
            >
                <AntDesign name="right" size={20} color="white" />

            </TouchableOpacity>

            <TouchableOpacity

                className={'bg-[#CA9D37] rounded-md p-3 ' + (currentPage === totalPages ? 'opacity-40' : null)}
                disabled={currentPage === totalPages ? true : false}
                onPress={() => handlePageNavigation('last')}
            >
                <AntDesign name="doubleright" size={20} color="white" />

            </TouchableOpacity>
        </View>
    )
}