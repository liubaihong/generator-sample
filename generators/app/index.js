// 此文件作为 generator 的核心入口
// 需要导出一个继承自 yeoman generator 的类型
// yeoman generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require("yeoman-generator")
module.exports = class extends Generator {
    prompting () {
        return this.prompt([{
            type: "input",
            name: "name",
            message: "your project name",
            default: this.appname //appname 为项目生成目录名称
        }]).then(answers => {
            this.answers = answers
        })
    }
    writing () {
        // yeoman 自动在生成文件阶段调用此方法
        // 我们这里尝试往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath("temp.txt"),
        //     Math.random().toString()
        // )
        // ----------------------------------------------------

        // 通过模板方式写入文件到目标目录

        // // 目标文件路径
        // const tmpl = this.templatePath("foo.txt")
        // // 输出目标路径
        // const output = this.destinationPath("foo.txt")
        // // 模板数据上下文
        // const context = {title: "liubh~", success: true}

        // this.fs.copyTpl(tmpl, output, context)
        // ----------------------------------------------------

        // 目标文件路径
        const tmpl = this.templatePath("bar.html")
        // 输出目标路径
        const output = this.destinationPath("bar.html")
        // 模板数据上下文
        const context = this.answers

        this.fs.copyTpl(tmpl, output, context)
    }
}