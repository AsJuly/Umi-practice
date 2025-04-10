
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import styles from './index.less'
import { Button, message, Upload } from 'antd';

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#757570',
      '100%': '#757570',
    },
    strokeWidth: 3,
    format: percent => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

const Uploads = () => {
  return (
    <div className='box'>
      <div className={styles.uStyle}>
        <Upload maxCount={3} {...props}>
          <Button icon={<UploadOutlined type='dashed' />}>上传</Button>
        </Upload>
      </div>
    </div>
  )
}

export default Uploads
