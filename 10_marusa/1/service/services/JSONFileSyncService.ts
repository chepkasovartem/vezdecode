import fs from 'fs'
import path from 'path'

export interface FileHandler<T> {
    read: () => T | null
    write: (data: T | null) => void
}

export class FileSync implements FileHandler<string> {
    tempFilename: string
    filename: string

    constructor(filename: string) {
        this.filename = filename
        this.tempFilename = path.join(path.dirname(filename), `.${path.basename(filename)}.tmp`)
    }

    read(): string | null {
        return fs.readFileSync(this.filename, 'utf-8')
    }

    write(body: string | null): void {
        fs.writeFileSync(this.tempFilename, body || '')
        fs.renameSync(this.tempFilename, this.filename)
    }
}

export class DBSync<T> {
    handler: FileHandler<T>
    data: T | null = null

    constructor(handler: FileHandler<T>) {
        this.handler = handler
    }

    read(): void {
        this.data = this.handler.read()
    }

    write(): void {
        this.handler.write(this.data)
    }
}

export class JSONFileSync<T> implements FileHandler<T> {
    handler: FileSync

    constructor(filename: string) {
        this.handler = new FileSync(filename)
    }

    read(): T | null {
        const data = this.handler.read()

        return data === null ? data : JSON.parse(data) as T
    }

    write(obj: T | null): void {
        this.handler.write(JSON.stringify(obj, null, 2))
    }
}