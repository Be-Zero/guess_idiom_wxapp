import os
class Config:
    SECRET_KEY = 'mrsoft'
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    # 小程序配置信息，需开发者自行填写
    AppID = ''
    AppSecret = ''

    @staticmethod
    def init_app(app):
        '''初始化配置文件'''
        pass

# the config for development
class DevelopmentConfig(Config):
    # 数据库信息，需开发者自行填写
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://username:secrec@127.0.0.1:3306/idiom'
    DEBUG = True

# define the config
config = {
    'default': DevelopmentConfig
}
