export default {
    'POST /umi/login':(req: { body: { username: string; password: string; }; },res: { send: (arg0: { err: number; message: string; currentAuthority?: string; }) => void; }) =>{
        const {username,password} = req.body;

        if(username === 'admin' && password === 'admin') {
            res.send({
                err:0,
                message:'成功',
                currentAuthority:'user'
            })
        }else if (username === 'admin' && password === '123456'){
            res.send({
                err:0,
                message:'成功',
                currentAuthority:'admin'
            })
        }else {
            res.send({
                err:1,
                message:'失败le'
            })
        }
    }
}
