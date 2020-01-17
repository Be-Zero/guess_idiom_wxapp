# guess_idiom_wxapp

**本系统参考明日科技官方开发的看图猜成语小程序**

**1. 题目**

> * 看图猜成语小程序开发（Flask\MySql+微信小程序实现）

**2. 题目要求**

> * 操作系统：window7及以上版本、Linux

> * Python版本：Python3.7

> * 开发工具：微信开发工具+PyCharm等

> * Python Web框架：Flask

> * 虚拟环境：virtualenv

> * 数据库：PyMySQL+MySQL

**3. 功能要求**

> * 微信小程序授权登录功能

> * 显示当前关卡功能

> * 显示用户信息功能

> * 答题功能

> * 判卷功能

> * 自动下一题功能

> * 排行榜功能

> * 分享好友功能

**4. 开发环境**

> * 操作系统：windows10

> * Python版本：Python3.7

> * 开发工具：微信开发者工具、PyCharm

> * Python Web框架：Flask

> * 虚拟环境：virtualenv

> * 接口调试工具：Postman

> * 数据库：PyMySQL、MySQL

> * 测试环境：iPhone 5

> * requirements.txt：

> > * Click==7.0

> > * Flask==1.1.1

> > * Flask-HTTPAuth==3.3.0

> > * Flask-SQLAlchemy==2.4.1

> > * Jinja2==2.10.3

> > * MarkupSafe==1.1.1

> > * PyMySQL==0.9.3

> > * SQLAlchemy==1.3.12

> > * Werkzeug==0.16.0

> > * asn1crypto==1.2.0

> > * certifi==2019.11.28

> > * cffi==1.13.2

> > * chardet==3.0.4

> > * cryptography==2.8

> > * idna==2.8

> > * itsdangerous==1.1.0

> > * pip==19.0.3

> > * pycparser==2.19

> > * requests==2.22.0

> > * setuptools==40.8.0

> > * six==1.13.0

> > * urllib3==1.25.7

**5. 使用说明**

**（1）使用pip安装virtualenv虚拟环境**

`pip install virtualenv`

**（2）在\guess目录下创建venv虚拟环境**

`virtualenv venv`

**（3）启动虚拟环境**

`source venv\scripts\activate`

**（4）安装依赖模块**

`pip install -r requirements.txt`

**（5）创建数据库**

``` python
# 在mysql数据库中创建idiom数据库
```

**（6）数据库迁移**

``` python
# 在guess\flask目录中使用命令：

python manager.py db init

python manager.py db migrate

python manager.py db upgrade
```

**（7）运行服务器**

`python manage.py runserver`