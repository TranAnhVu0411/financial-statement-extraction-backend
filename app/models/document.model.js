module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        userid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: {
                model: "accounts",
                key: "id",
            },
            allowNull: false,
        },
        documentname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pagenum: {
            type: Sequelize.INTEGER,
        },
        pdfstatus: {
            type: Sequelize.STRING,
            defaultValue: 'new',
            allowNull: false,
        },
        imagestatus: {
            type: Sequelize.STRING,
            defaultValue: 'new',
            allowNull: false,
        },
        ocrstatus: {
            type: Sequelize.STRING,
            defaultValue: 'new',
            allowNull: false,
        },
        createdate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },{
        timestamps: false
    });
    return Document;
};