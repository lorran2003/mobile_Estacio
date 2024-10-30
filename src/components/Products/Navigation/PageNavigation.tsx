import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';

interface PropsPageNavigation {
    totalProducts: number;
    nextPage: (quantityOfProductsRender: number) => void;
    previousPage: (quantityOfProductsRender: number) => void;
    lastPage: (totalQuantityOfProducts: number) => void;
    startPage: () => void;
}

export function PageNavigation({ totalProducts, nextPage, previousPage, lastPage, startPage }: PropsPageNavigation) {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(totalProducts / 4);

    const handlePageNavigation = (action: string) => {

        switch (action) {

            case 'start':
                setCurrentPage(1);
                startPage();
                break;

            case 'previous':
                setCurrentPage(currentPage - 1);
                previousPage(currentPage * 4);
                break;

            case 'next':
                setCurrentPage(currentPage + 1);
                nextPage(currentPage * 4);
                break;

            case 'last':
                setCurrentPage(totalPages);
                lastPage(totalPages * 4);
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