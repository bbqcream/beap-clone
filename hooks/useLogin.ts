import axios from 'axios';
import {useState} from 'react';
import {DODAM_API_URL, REDIRECT_API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {getToken} from './getToken';

export const useLogin = () => {
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigation = useNavigation();
    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        const loginData = {
            id,
            pw,
            clientId:
                '575fe863c46f4126a9c17e4af4b82d5d351bdff5507d454086a88edd19afa723',
            redirectUrl: REDIRECT_API_URL,
        };

        try {
            const response = await axios.post(
                `${DODAM_API_URL}/api/auth/login`,
                loginData,
            );
            if (response.status === 200) {
                await getToken({ data: response.data?.data?.location, navigation });
            }
        } catch (e) {
            setError('로그인 실패');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return {
        id,
        pw,
        loading,
        error,
        handleLogin,
        setId,
        setPw,
        setError,
        setLoading,
    };
};
