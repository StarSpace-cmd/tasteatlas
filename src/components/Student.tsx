import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    lastName: string;
    firstName: string;
    parallel: string;
}

export default function Student( { lastName, firstName, parallel }: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {lastName} {firstName}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                Paralelo {parallel}

            </Typography>
        </>
    )
}
