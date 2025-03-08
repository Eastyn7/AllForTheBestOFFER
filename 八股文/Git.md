# Git

## 基础问题

#### Git的工作区（Workspace）、暂存区（Staging  Area）和版本库（Repository）有什么区别？

工作区：本地文件系统中可见的代码目录，开发者直接编辑文件的地方

暂存区：通过`git add`将修改的文件暂存时保存的区域，用于准备下一次提交

版本库：通过`git commit`将暂存区内容有永久保存到本地仓库的历史记录中

#### `git clone`和`git fork`的区别是什么？

`git clone`：将远程仓库的代码复制到本地，生成一个本地仓库副本

`git fork`：在远程平台上复制他人仓库到自己的账号下，用于贡献代买或独立开发

#### 如何创建一个新分支并切换到该分支？

~~~bash
git checkout -b feature/new-branch # 旧版写法
git switch -c feature/new-branch # 新版推荐写法
~~~

#### `git merge`和`git rebase`的区别是什么？

Merge：保留分支历史，生成一个新的合并提交，适合公共分支（如main）

Rebase：将当前分支的提交“变基”到目标分支的最新提交上，保持线性历史，适合本地分支整理提交

关键区别：Merge保留分支拓扑，Rebase重写提交历史（可能引发冲突需谨慎使用）

#### 如何撤销最后一次提交？

~~~bash
git reset --soft HEAD~1 # 撤销提交但保留修改到暂存区
git reset --hard HEAD~1 # 彻底丢弃最后一次提交和修改
~~~

#### 如何解决Git合并冲突？

执行`git merge`或`git pull`后提示冲突

打开冲突文件，搜索`<<<<<<<`标记，手动修改代码解决冲突

使用`git add`标记冲突已解决

完成合并`git commit`

#### 如何将某次提交单独应用到另一个分支？

使用`git cherry-pick <commit-hash>`，将指定提交的修改应用到当前分支

#### `.gitignore` 文件的作用是什么？前端项目中常见的忽略项有哪些？

作用：指定不需要版本控制的文件或目录

常见忽略项：

- ~~~bash
  node_modules/
  dist/
  .env
  .DS_Store
  *.log
  ~~~

#### `git fetch` 和 `git pull` 的区别是什么？

`git fetch`：从远程仓库下载最新数据，但不自动合并到本地分支

`git pull` = `git fetch` + `git merge`，自动合并可能引发冲突

#### 如何查看某行代码的最后一次修改记录

~~~bash
git blame <file>  # 显示文件的每一行最后修改的提交和作者
~~~

####  Git 的 "HEAD" 是什么？

HEAD 是一个指向当前分支最新提交的指针，可以理解为“当前所处的位置”



## 基本操作流程

| 命令                                   | 说明                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| git init                               | 初始化仓库                                            |
| git clone                              | 拷贝远程仓库                                          |
| git add <filename>                     | 添加文件到暂存区（后面接文件名，其中“.”表示所有文件） |
| git commit -m "commit message"         | 提交暂存区到本地仓库                                  |
| git branch -M main                     | 重命名当前分支为 main                                 |
| git remote add origin <github仓库链接> | 关联远程仓库                                          |
| git push -u origin main                | 上传远程代码并合并                                    |



## 其他指令

| 命令                                  | 说明                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| git status                            | 查看仓库当前的状态，显示有变更的文件                         |
| git diff                              | 比较文件的不同，即暂存区和工作区的差异                       |
| git difftool                          | 使用外部差异工具查看和比较文件的更改                         |
| git range-diff                        | 比较两个提交范围之间的差异                                   |
| git reset                             | 回退版本                                                     |
| git rm                                | 将文件从暂存区和工作区中删除                                 |
| git mv                                | 移动或重命名工作区文件                                       |
| git notes                             | 添加注释                                                     |
| git checkout                          | 分支切换                                                     |
| git switch                            | 更清晰地切换分支                                             |
| git restore                           | 恢复或撤销文件的更改                                         |
| git show                              | 显示Git对象的详细信息                                        |
| git log                               | 查看历史提交记录                                             |
| git blame <file>                      | 以列表的形式查看指定文件的历史修改记录                       |
| git shortlog                          | 生成简洁的提交日志摘要                                       |
| git describe                          | 生成一个可读的字符串，该字符串基于 Git 的标签系统来描述当前的提交 |
| git fetch                             | 从远程获取代码库                                             |
| git pull                              | 下载远程代码并合并                                           |
| git submodule                         | 管理包含其他 Git 仓库的项目                                  |
| git branch                            | 查看所有分支                                                 |
| git merge <branchname>                | 将其他分支合并到当前分支                                     |
| git branch -d <branchname>            | 删除本地分支（-D 强制删除未合并的分支）                      |
| git push origin --delete <branchname> | 删除远程分支                                                 |